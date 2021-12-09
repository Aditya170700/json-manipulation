const dataJson = [
  {
    "inventory_id": 9382,
    "name": "Brown Chair",
    "type": "furniture",
    "tags": [
      "chair",
      "furniture",
      "brown"
    ],
    "purchased_at": 1579190471,
    "placement": {
      "room_id": 3,
      "name": "Meeting Room"
    }
  },
  {
    "inventory_id": 9380,
    "name": "Big Desk",
    "type": "furniture",
    "tags": [
      "desk",
      "furniture",
      "brown"
    ],
    "purchased_at": 1579190642,
    "placement": {
      "room_id": 3,
      "name": "Meeting Room"
    }
  },
  {
    "inventory_id": 2932,
    "name": "LG Monitor 50 inch",
    "type": "electronic",
    "tags": [
      "monitor"
    ],
    "purchased_at": 1579017842,
    "placement": {
      "room_id": 3,
      "name": "Lavender"
    }
  },
  {
    "inventory_id": 232,
    "name": "Sharp Pendingin Ruangan 2PK",
    "type": "electronic",
    "tags": [
      "ac"
    ],
    "purchased_at": 1578931442,
    "placement": {
      "room_id": 5,
      "name": "Dhanapala"
    }
  },
  {
    "inventory_id": 9382,
    "name": "Alat Makan",
    "type": "tableware",
    "tags": [
      "spoon",
      "fork",
      "tableware"
    ],
    "purchased_at": 1578672242,
    "placement": {
      "room_id": 10,
      "name": "Rajawali"
    }
  }
]

// Find items in the Meeting Room.
let meetingRoomItems = dataJson.filter(item => item.placement.room_id === 3)

// Find all electronic devices.
let electronicDeviceItems = dataJson.filter(item => item.type === 'electronic')

// Find all the furniture.
let furnitureItems = dataJson.filter(item => item.type === 'furniture')

// Find all items were purchased on 16 Januari 2020.
let purchasedAtJanuaryItems = dataJson.filter(item => {
  let date = new Date(item.purchased_at * 1000)
  
  return `${date.toLocaleString('id-ID', { day: 'numeric' })} ${date.toLocaleString('id-ID', { month: 'long' })} ${date.toLocaleString('id-ID', { year: 'numeric' })}` === '16 Januari 2020'
})

// Find all items with brown color.
let brownItems = dataJson.filter(item => item.tags.includes('brown'))

console.log("Find items in the Meeting Room.")
console.log(meetingRoomItems)
console.log("Find all electronic devices.")
console.log(electronicDeviceItems)
console.log("Find all the furniture.")
console.log(furnitureItems)
console.log("Find all items were purchased on 16 Januari 2020.")
console.log(purchasedAtJanuaryItems)
console.log("Find all items with brown color.")
console.log(brownItems)
