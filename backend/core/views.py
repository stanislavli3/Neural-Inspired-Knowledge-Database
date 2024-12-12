from django.shortcuts import render

def home(request):
    # index.html should be in the TEMPLATES directory you configured (frontend/build)
    return render(request, 'index.html')

# Example notes_api view (adjust as needed)
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET', 'POST'])
def notes_api(request):
    if request.method == 'GET':
        # Return a list of notes (assuming you have a Note model)
        return Response([])  # Replace with actual data
    elif request.method == 'POST':
        # Create a note
        return Response({"message": "Note created"}, status=201)
