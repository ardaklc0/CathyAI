from django.template import loader
from django.http import HttpResponse

def index(request):
    template = loader.get_template("polls/index.html")
    return HttpResponse(template.render(request))

def submit(request):
    var = request.POST.get("input")
    print(var)
    return HttpResponse()