
/*
 * GET home page.
 */

exports.index = function(req, res){
  var messages = {
    "guestMessages": [
        {
            "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus mi ac sapien blandit luctus. Duis et nisi lectus. Donec eleifend tempor elit nec molestie. Donec blandit congue augue consequat scelerisque. Sed eleifend, justo ac bibendum tincidunt, nunc libero ultricies odio, eu bibendum lectus magna ac lectus. Nunc elementum pharetra elit at accumsan. Suspendisse ultricies convallis ante, ut lacinia elit lacinia sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "email": "test@gmail.com",
            "name": "Jack",
            "entryDate": "12/12/12",
            "status": true
        },
        {
            "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus mi ac sapien blandit luctus. Duis et nisi lectus. Donec eleifend tempor elit nec molestie. Donec blandit congue augue consequat scelerisque. Sed eleifend, justo ac bibendum tincidunt, nunc libero ultricies odio, eu bibendum lectus magna ac lectus. Nunc elementum pharetra elit at accumsan. Suspendisse ultricies convallis ante, ut lacinia elit lacinia sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "email": "test@gmail.com",
            "name": "Kent",
            "entryDate": "12/12/12",
            "status": true
        },
        {
            "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus mi ac sapien blandit luctus. Duis et nisi lectus. Donec eleifend tempor elit nec molestie. Donec blandit congue augue consequat scelerisque. Sed eleifend, justo ac bibendum tincidunt, nunc libero ultricies odio, eu bibendum lectus magna ac lectus. Nunc elementum pharetra elit at accumsan. Suspendisse ultricies convallis ante, ut lacinia elit lacinia sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "email": "test@gmail.com",
            "name": "Libby",
            "entryDate": "12/12/12",
            "status": true
        },
        {
            "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus mi ac sapien blandit luctus. Duis et nisi lectus. Donec eleifend tempor elit nec molestie. Donec blandit congue augue consequat scelerisque. Sed eleifend, justo ac bibendum tincidunt, nunc libero ultricies odio, eu bibendum lectus magna ac lectus. Nunc elementum pharetra elit at accumsan. Suspendisse ultricies convallis ante, ut lacinia elit lacinia sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "email": "test@gmail.com",
            "name": "Rose",
            "entryDate": "12/12/12",
            "status": true
        },
        {
            "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus mi ac sapien blandit luctus. Duis et nisi lectus. Donec eleifend tempor elit nec molestie. Donec blandit congue augue consequat scelerisque. Sed eleifend, justo ac bibendum tincidunt, nunc libero ultricies odio, eu bibendum lectus magna ac lectus. Nunc elementum pharetra elit at accumsan. Suspendisse ultricies convallis ante, ut lacinia elit lacinia sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "email": "test@gmail.com",
            "name": "Tanner",
            "entryDate": "12/12/12",
            "status": true
        },
        {
            "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus mi ac sapien blandit luctus. Duis et nisi lectus. Donec eleifend tempor elit nec molestie. Donec blandit congue augue consequat scelerisque. Sed eleifend, justo ac bibendum tincidunt, nunc libero ultricies odio, eu bibendum lectus magna ac lectus. Nunc elementum pharetra elit at accumsan. Suspendisse ultricies convallis ante, ut lacinia elit lacinia sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "email": "test@gmail.com",
            "name": "Travis",
            "entryDate": "12/12/12",
            "status": true
        }
    ]
};

  res.render('index', messages);
};