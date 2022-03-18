from rest_framework import routers

from .views import EmployeeViewSet, EmployerViewSet

router = routers.SimpleRouter()

router.register('employee', EmployeeViewSet, basename='employee-base')
router.register('employer', EmployerViewSet, basename='employer-base')

urlpatterns = []
urlpatterns += router.urls
