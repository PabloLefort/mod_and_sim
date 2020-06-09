import logging
from rest_framework import serializers


class MethodDataSerializer(serializers.Serializer):
    function = serializers.CharField()
    x_zero = serializers.FloatField(min_value=0.0)
    h = serializers.FloatField(min_value=0.1, required=False)
    n = serializers.IntegerField(max_value=50, min_value=1, required=False, default=50)
    method = serializers.CharField()

    # TODO: validate function

    def validate_method(self, value):
        available_methods = ['euler', 'euler+']
        if value not in available_methods:
            raise serializers.ValidationError(f'method must be one of {available_methods}')

    def validate(self, data):
        h = data.get('h')
        if h and h > data['n']:
            raise serializers.ValidationError('h must be lower than n')

        return data
