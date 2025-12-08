localStorage.clear()
const employees = [
  {
    "id": 1,
    "firstname": "Aarav",
    "email": "a@a.com",
    "password": "123",
    "taskCounts": { "active": 1, "newTask": 1, "completed": 1, "failed": 1 },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Weekly Report",
        "taskDescription": "Collect and summarize weekly performance data.",
        "taskDate": "2025-12-05",
        "category": "Reporting"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Team Meeting",
        "taskDescription": "Attend internal discussion about project timelines.",
        "taskDate": "2025-12-04",
        "category": "Meetings"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Update Documentation",
        "taskDescription": "Revise outdated docs in the project folder.",
        "taskDate": "2025-12-03",
        "category": "Documentation"
      }
    ]
  },

  {
    "id": 2,
    "firstname": "Vihaan",
    "email": "employee2@example.com",
    "password": "123",
    "taskCounts": { "active": 1, "newTask": 1, "completed": 2, "failed": 1 },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Client Follow-Up",
        "taskDescription": "Send follow-up emails to pending clients.",
        "taskDate": "2025-12-05",
        "category": "Communication"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Inventory Check",
        "taskDescription": "Verify available stock and prepare status sheet.",
        "taskDate": "2025-12-02",
        "category": "Warehouse"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "System Backup",
        "taskDescription": "Perform data backup on local servers.",
        "taskDate": "2025-12-01",
        "category": "IT"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Training Session",
        "taskDescription": "Attend software tool training conducted online.",
        "taskDate": "2025-12-03",
        "category": "Training"
      }
    ]
  },

  {
    "id": 3,
    "firstname": "Ishaan",
    "email": "employee3@example.com",
    "password": "123",
    "taskCounts": { "active": 1, "newTask": 1, "completed": 1, "failed": 1 },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Design Banner",
        "taskDescription": "Create promotional banner for website.",
        "taskDate": "2025-12-05",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Fix UI Bugs",
        "taskDescription": "Resolve reported UI alignment issues.",
        "taskDate": "2025-12-04",
        "category": "Frontend"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Color Theme Update",
        "taskDescription": "Update brand color palette across pages.",
        "taskDate": "2025-12-02",
        "category": "Design"
      }
    ]
  },

  {
    "id": 4,
    "firstname": "Kabir",
    "email": "employee4@example.com",
    "password": "123",
    "taskCounts": { "active": 1, "newTask": 1, "completed": 2, "failed": 2 },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "API Integration",
        "taskDescription": "Integrate new payment gateway API.",
        "taskDate": "2025-12-05",
        "category": "Backend"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Database Cleanup",
        "taskDescription": "Remove duplicate records from user table.",
        "taskDate": "2025-12-03",
        "category": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Security Review",
        "taskDescription": "Review API security vulnerabilities.",
        "taskDate": "2025-12-02",
        "category": "Security"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Deploy Test Build",
        "taskDescription": "Deploy application update to staging environment.",
        "taskDate": "2025-12-04",
        "category": "DevOps"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Code Review",
        "taskDescription": "Review merge request from frontend team.",
        "taskDate": "2025-12-01",
        "category": "Code Review"
      }
    ]
  },

  {
    "id": 5,
    "firstname": "Reyansh",
    "email": "employee5@example.com",
    "password": "123",
    "taskCounts": { "active": 1, "newTask": 1, "completed": 1, "failed": 1 },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Content Writing",
        "taskDescription": "Write blog post for December campaign.",
        "taskDate": "2025-12-05",
        "category": "Content"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "SEO Optimization",
        "taskDescription": "Optimize landing page for SEO ranking.",
        "taskDate": "2025-12-03",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Keyword Research",
        "taskDescription": "Find relevant keywords for new articles.",
        "taskDate": "2025-12-02",
        "category": "Marketing"
      }
    ]
  }
];



const admin=[{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
}]

export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
        localStorage.setItem('admin',JSON.stringify(admin) )
}
export const getLocalStorage=()=>{
    // const data = localStorage.getItem('employees')
    // console.log(JSON.parse(data))

    const data = JSON.parse(localStorage.getItem('employees'))
    const data1 = JSON.parse(localStorage.getItem('admin'))
 
    // console.log(data,data1);
    return {employees,admin}
    
}


