# How to Manage Your Website

## 1. How to Add a New Product
To add a new product, you need to edit the file `assets/js/products.js`.

1.  Open `assets/js/products.js` in a text editor (like Notepad or VS Code).
2.  Find the list of products (it starts with `const products = [...]`).
3.  Add a new item to the list following this format:

```javascript
    {
        id: 17, // Make sure this ID is unique (increment the last one)
        name: "New Product Name",
        category: "cylinders", // Choose: cylinders, pumps, valves, hoses
        description: "Short description of the product.",
        image: "./assets/images/products/new-image.jpg", // Path to your image
        specs: {
            "Spec 1": "Value 1",
            "Spec 2": "Value 2",
            "Material": "Steel"
        },
        applications: ["Industry 1", "Industry 2"]
    },
```

> **Tip:** Copy an existing product block and paste it at the end of the list (before the closing `];`), then change the details.

## 2. How to Change Images
1.  Save your image file (e.g., `my-pump.jpg`) into the folder: `assets/images/products/`.
2.  In `products.js`, update the `image` field to match your filename:
    `image: "./assets/images/products/my-pump.jpg"`

## 3. How to Edit Contact Info
To change your phone number or email:
1.  Edit `index.html`, `contact.html`, and `shop.html`.
2.  Search for the old number (e.g., `071 680 3228`) and replace it.
3.  Search for the WhatsApp link (`wa.me/9471...`) and update it completely.

## 4. How to Update the Logo (Text vs Image)
The site is currently set to use a **Text Logo**.
If you want to switch back to an image:
1.  Open `index.html` (and other pages).
2.  Find the `<a class="logo">` section.
3.  Replace the text `Sagara <span>Hydraulics</span>` with:
    `<img src="./assets/images/logo.png" alt="Logo" class="logo-img">`
