const emplopyees = [
  {
    name: "Josh",
    lastname: "Phillips",
    age: 29,
    dateOfBirth: "15.01.2004",
    id: 1,
  },
  {
    name: "Josh",
    lastname: "Phillips",
    age: 29,
    dateOfBirth: "15.01.2004",
    id: 2,
  },
  {
    name: "Josh",
    lastname: "Phillips",
    age: 29,
    dateOfBirth: "15.01.2004",
    id: 3,
  },
  {
    name: "Josh",
    lastname: "Phillips",
    age: 29,
    dateOfBirth: "15.01.2004",
    id: 4,
  },
];

// GET REQUEST
export async function GET(request) {
  return new Response(JSON.stringify(emplopyees));
}

// POST REQUEST
async function POST(request) {
  const req = await request.json();
  
}
// DELETE REQUEST
async function DELETE(request) {}

// PUT REQUEST
async function PUT(request) {}
