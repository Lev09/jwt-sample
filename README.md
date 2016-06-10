# jwt-sample
JWT sample with private and public keys 

## Usage
Assuming you have docker and docker-compose installed

 * clone repo
 * swithch to root of project
 * run in terminal `docker-compose up`
 * openyour browser and navigate to `localhost/api/hi` you will see message telling that you are not logged in
 * open browser console go to networks and refresh the page to see server response   
 you will see an response with `401 unauthorized` status
 
 * replace the `/api/hi` with `/login`
 this will send request to first server, server will create and sign jwt token for you
 which you can see in cookies
 
 * now if you will go bac to `/api/hi` you will see hello message from second server
 
 There is also `.gitignore-sample` for git,
 to use it make copy of `.gitignore-sample` file 
 and rename the copy to `.gitignore` 
