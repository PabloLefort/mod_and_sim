import logging
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import MethodDataSerializer


class ProcessorView(APIView):
    content_type = 'application/json'

    def post(self, request, format=None):
        serializer = MethodDataSerializer(data=request.data)
        if serializer.is_valid():
            logging.info(serializer.validated_data)
            dots = []
            for i in range(1, n+1):
                pass
            return Response({'asd': 1}, )
        else:
            return Response(serializer.errors, status=400)
