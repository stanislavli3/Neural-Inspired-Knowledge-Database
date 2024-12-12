from django.db import models

class Note(models.Model):
    title = models.CharField(max_length=255)  # A title for the note
    content = models.TextField()             # The main content of the note
    created_at = models.DateTimeField(auto_now_add=True)  # Auto-set when created
    updated_at = models.DateTimeField(auto_now=True)      # Auto-set when updated

    def __str__(self):
        return self.title
