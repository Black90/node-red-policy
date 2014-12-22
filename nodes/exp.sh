#!/bin/bash

#echo app.sh running with SOME_ENV_VAR=${SOME_ENV_VAR}
#echo "app.sh running app.js"
#export SOME_ENV_VAR="$(node app.js)" 

TOK=$(curl -H "Content-Type: application/json;charset=UTF-8" -d '{"username":"test2","password":"pass"}' -X POST http://132.231.11.217:8080/auth/user/)
#export TOKEN=eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI3YjQxNmFmMC01N2UxLTQxMWMtYmFhNi1mYzBmODNiYTIzZGUiLCJzdWIiOiI5MmY4M2VhNC0yODM1LTRkY2UtYTM0YS01NzExZDk0OGM2MTAiLCJzY29wZSI6WyJzY2ltLnVzZXJpZHMiLCJwYXNzd29yZC53cml0ZSIsImNsb3VkX2NvbnRyb2xsZXIud3JpdGUiLCJvcGVuaWQiLCJjbG91ZF9jb250cm9sbGVyLnJlYWQiXSwiY2xpZW50X2lkIjoidm1jIiwiY2lkIjoidm1jIiwidXNlcl9pZCI6IjkyZjgzZWE0LTI4MzUtNGRjZS1hMzRhLTU3MTFkOTQ4YzYxMCIsInVzZXJfbmFtZSI6InRlc3QyIiwiZW1haWwiOiJ0ZXN0MkBjb21wb3NlLmNvbSIsImlhdCI6MTQxOTI0MjI3MywiZXhwIjoxNDE5Mjg1NDczLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiYXVkIjpbInNjaW0iLCJvcGVuaWQiLCJjbG91ZF9jb250cm9sbGVyIiwicGFzc3dvcmQiXX0.OyzLYv_Ekt8epP_T2yC0H99CcgNcmCI7AohgqgDMZ74
#echo $TOKEN 
echo $TOK | tr '"' '\n' > output
TOK=$(head -n 4 output | tail -n 1)
#echo $TOKEN
export TOKEN=$TOK
echo $TOKEN