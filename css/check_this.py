import cgi
form = cgi.FieldStorage()
first_name = form.getvalue('first')

print(first_name)
def foo():
  return "hi"
