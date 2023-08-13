from django.urls import path, include
from rest_framework import routers 
from rest_framework.documentation import include_docs_urls 
from tasks import views



#gernera las rutas GEt,POST,PUT,DELETE

router = routers.DefaultRouter()
router.register(r'tasks',views.TaskView,'tasks')
#Api version
urlpatterns = [
    #http://localhost:8000/tasks/api/v1/tasks/
    path("api/v1/",include(router.urls)),
    path("docs/",include_docs_urls(title="Task API"))
]