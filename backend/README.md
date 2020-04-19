# Run the backend

- Have Docker installed
- Move to modsim folder `cd modsim`
- Add a `local_settings.py` with `SECRET_KEY = 'yoursupersecret'`
- Run `docker build .` (This will return something like `Successfully built 9d06bcb2...` -> and that `9d06bcb2...` its the image id, to be used below)
- Run `docker run -d -rm -p 8000:8000 <image_id>` (Do not forget to replace the image_id!)
- Navigate to `http://localhost:8000/` 🚀
