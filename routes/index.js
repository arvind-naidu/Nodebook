
/*
 * GET home page.
 */

exports.index = function(req, res){
  var messages = {
    "guestMessages": [
        {
            "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend tempor elit nec molestie. Donec blandit congue augue consequat scelerisque. Sed eleifend, justo ac bibendum tincidunt, nunc libero ultricies odio, eu bibendum lectus magna ac lectus. Nunc elementum pharetra elit at accumsan. Suspendisse ultricies convallis ante, ut lacinia elit lacinia sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "email": "test@gmail.com",
            "name": "Jack Dehlin",
            "entryDate": "12/12/12",
            "status": true
        },
        {
            "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus mi ac sapien blandit luctus. Duis et nisi lectus. Donec eleifend tempor elit nec molestie. Donec blandit congue augue consequat scelerisque. Sed eleifend, justo ac bibendum tincidunt, nunc libero ultricies odio, eu bibendum lectus magna ac lectus. Nunc elementum pharetra elit at accumsan. Suspendisse ultricies convallis ante, ut lacinia elit lacinia sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "email": "test@gmail.com",
            "name": "Kent Pirlo",
            "entryDate": "12/12/12",
            "status": true
        },
        {
            "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus mi ac sapien blandit luctus. Duis et nisi lectus. Donec eleifend tempor elit nec molestie. Donec blandit congue augue consequat scelerisque. Sed eleifend, justo ac bibendum tincidunt, nunc libero ultricies odio, eu bibendum lectus magna ac lectus. Nunc elementum pharetra elit at accumsan.",
            "email": "test@gmail.com",
            "name": "Libby DeHaan",
            "entryDate": "12/12/12",
            "status": true
        },
        {
            "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus mi ac sapien blandit luctus. Duis et nisi lectus. Donec eleifend tempor elit nec molestie. Donec blandit congue augue consequat scelerisque. Suspendisse ultricies convallis ante, ut lacinia elit lacinia sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "email": "test@gmail.com",
            "name": "Rose McCluskey",
            "entryDate": "12/12/12",
            "status": true
        },
        {
            "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus mi ac sapien blandit luctus. Duis et nisi lectus. Donec eleifend tempor elit nec molestie. Donec blandit congue augue consequat scelerisque. Sed eleifend, justo ac bibendum tincidunt, nunc libero ultricies odio, eu bibendum lectus magna ac lectus. Nunc elementum pharetra elit at accumsan. Suspendisse ultricies convallis ante, ut lacinia elit lacinia sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "email": "test@gmail.com",
            "name": "Tanner Yuhas",
            "entryDate": "12/12/12",
            "status": true
        },
        {
            "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus mi ac sapien blandit luctus. Duis et nisi lectus. Donec eleifend tempor elit nec molestie. Donec blandit congue augue consequat scelerisque. Sed eleifend, justo ac bibendum tincidunt, nunc libero ultricies odio, eu bibendum lectus magna ac lectus. Nunc elementum pharetra elit at accumsan. Suspendisse ultricies convallis ante, ut lacinia elit lacinia sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "email": "test@gmail.com",
            "name": "Travis Maynard",
            "entryDate": "12/12/12",
            "status": true
        }
    ]
};

  res.render('index', messages);
};