# Neural-Inspired Knowledge Database - Backend

This is the backend repository for the Neural-Inspired Knowledge Database project. It uses Django as the primary web framework and follows best practices for maintainable and scalable development.

---

## Directory Structure

```plaintext
backend/
│
├── core/                          # Main app directory for core functionality
│   ├── migrations/                # Auto-generated database migrations
│   ├── __init__.py                # Marks the directory as a Python package
│   ├── admin.py                   # Admin configuration for the app
│   ├── apps.py                    # App configuration
│   ├── models.py                  # Data models
│   ├── serializers.py             # DRF serializers for API responses
│   ├── tests.py                   # Unit tests for this app
│   ├── views.py                   # App-specific views
│   └── urls.py                    # App-specific URL routing
│
├── neural_ai/                     # Main project settings
│   ├── __init__.py
│   ├── asgi.py                    # ASGI entry point
│   ├── wsgi.py                    # WSGI entry point
│   ├── settings.py                # Project settings
│   └── urls.py                    # Root URL configuration
│
├── manage.py                      # Django management script
├── db.sqlite3                     # SQLite database (replace with production DB later)
├── static/                        # Collected static files
├── media/                         # User-uploaded files
├── .env                           # Environment variables for local dev
├── .gitignore                     # Git ignore file
└── README.md                      # Project documentation
