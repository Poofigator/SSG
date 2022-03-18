from rest_framework import serializers

from ..models import Employee, Employer


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['full_name', 'date_of_birth', 'email', 'phone', 'job', 'message']

class EmployerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employer
        fields = ['full_name', 'organization', 'email', 'phone', 'message']
