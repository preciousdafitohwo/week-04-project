# week-04-project
Building a full stack application that retrieves information from a database and display it on our client page.

user stories

1) to a have a visitors guestbook where users can post messages for all visitors to read
2) for posted messages to be saved on a database connected to a server and displayed on the static web page
3) for visitors to be able to delete their messages

i feel i was able to meet the requirements of this exercise, structuring of the page went well and the site is responsive for smaller devices.

i manually deleted node_modules from github and it caused some bugs for when i was trying to push my local to remote. one of the things i tried as a solution was to re-clone the github repo into my local folder as an "up to date copy" and work on that but this didnt solve the issue. i later found out i had 2 seperate branches which i had to merge before i was able to sort out the issue. after re deploying and reviewing my site, i noticed the send message button wasnt adding the visitors messsage to the database but after reviewing my code, i noticed there were two slashes instead of one on my fetch post method, removing the extra slash solved that problem.

if i had enough time, i would like to update the code so that when when a message is posted or deleted the page is automatically updated to show the result (at the moment you have to refresh the page to see the result)- i tried adding my get messages function to both my delete button and send message button to achieve this result, it did update the page, but it also had the previous messages (so all the messages became diplicates except the newsest posted one)