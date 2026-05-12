from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Expense
from .serializers import ExpenseSerializer
# Create your views here.

@api_view(['GET' , 'POST'])
def expense_list(request):
     if request.method == 'GET':
          expenses = Expense.objects.all()
          serializer = ExpenseSerializer(expenses,many=True)
          return Response(serializer.data)
     
     elif request.method == 'POST':
          serializer = ExpenseSerializer(data=request.data)
          if serializer.is_valid():
               serializer.save()
               return Response(serializer.data)
          return Response(serializer.errors)