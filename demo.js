let arr = [
    {
        "id": 22,
        "title": "Inspection",
        "order_number": 1,
        "last_updated": "2023-01-25T00:56:56.000Z",
        "update_by": 3,
        "is_deleted": 0,
        "product_id": 4,
        "category_id": 4
    },
    {
        "id": 20,
        "title": "Application",
        "order_number": 2,
        "last_updated": "2023-01-26T23:57:12.000Z",
        "update_by": 3,
        "is_deleted": 0,
        "product_id": 4,
        "category_id": 20
    },
    {
        "id": 21,
        "title": "Payments",
        "order_number": 3,
        "last_updated": "2023-01-27T00:04:22.000Z",
        "update_by": 3,
        "is_deleted": 0,
        "product_id": 4,
        "category_id": 21
    },
    {
        "id": 22,
        "title": "Order Cancellation Policy",
        "order_number": 4,
        "last_updated": "2023-01-27T00:05:12.000Z",
        "update_by": 3,
        "is_deleted": 0,
        "product_id": 4,
        "category_id": 22
    },
    {
        "id": 23,
        "title": "OBD",
        "order_number": 5,
        "last_updated": "2023-01-27T01:23:05.000Z",
        "update_by": 3,
        "is_deleted": 0,
        "product_id": 4,
        "category_id": 23
    },
    {
        "id": 24,
        "title": "Coverage Area",
        "order_number": 6,
        "last_updated": "2023-01-27T05:48:28.000Z",
        "update_by": 3,
        "is_deleted": 0,
        "product_id": 4,
        "category_id": 24
    }
]

function getCategoryfromId(id){
    console.log("id: " + id, arr, arr.find(obj => obj.id == id)?.title);
    // const obj = this.productCategories.find(item => item.id == id);
    return arr.find(obj => obj.id === id)?.title;
  }

  getCategoryfromId(23)