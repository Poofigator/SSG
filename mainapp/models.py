from django.db import models


class Employee(models.Model):
    full_name = models.CharField(max_length=255)
    date_of_birth = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)
    job = models.CharField(max_length=255)
    message = models.CharField(max_length=255)
    add_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "{} хочет устроиться работать {}, время оставления заявки {}".format(self.full_name, self.job, self.add_date)

class Employer(models.Model):
    full_name = models.CharField(max_length=255)
    organization = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)
    message = models.CharField(max_length=255)
    add_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "{} {} хочет сотрудничать, время оставления заявки {}".format(self.full_name, self.organization, self.add_date)
