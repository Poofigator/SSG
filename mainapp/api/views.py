from rest_framework import viewsets
from rest_framework.exceptions import ValidationError

from .serialaizers import EmployeeSerializer, EmployerSerializer
from ..models import Employee, Employer


class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

    def get_queryset(self):
        return None

    def perform_create(self, EmployeeSerializer):
        if len(Employee.objects.filter(full_name=self.request.data.get('full_name'))) < 5:
            EmployeeSerializer.save(full_name=self.request.data.get('full_name'))

        else:
            raise ValidationError('')


class EmployerViewSet(viewsets.ModelViewSet):
    queryset = Employer.objects.all()
    serializer_class = EmployerSerializer

    def get_queryset(self):
        return None

    def perform_create(self, EmployerSerializer):
        if len(Employer.objects.filter(full_name=self.request.data.get('full_name'))) < 5:
            EmployerSerializer.save(full_name=self.request.data.get('full_name'))

        else:
            raise ValidationError('')
