import { useState } from 'react';
import { Collapse, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

interface Department {
  name: string;
  subDepartments: string[];
}

const departments: Department[] = [
  {
    name: 'customer_service',
    subDepartments: ["support", "customer_success"],
  },
  {
    name: 'design',
    subDepartments: [
      "graphic_design",
      "product_design",
      "web_design"
    ],
  },
];

function DepartmentList() {
  const [openDepartment, setOpenDepartment] = useState<string | null>(null);
  const [selectedSubDepartments, setSelectedSubDepartments] = useState<string[]>([]);
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);

  const handleDepartmentClick = (departmentName: string) => {
    if (openDepartment === departmentName) {
      setOpenDepartment(null);
    } else {
      setOpenDepartment(departmentName);
    }
  };

  const handleSubDepartmentChange = (subDept: string) => {
    setSelectedSubDepartments(prevSelected => {
      if (prevSelected.includes(subDept)) {
        return prevSelected.filter(item => item !== subDept);
      } else {
        return [...prevSelected, subDept];
      }
    });
  };

  const handleDepartmentChange = (departmentName: string) => {
    const department = departments.find(dept => dept.name === departmentName);
    if (department) {
      if (selectedDepartments.includes(departmentName)) {
        setSelectedDepartments(prevSelected => prevSelected.filter(item => item !== departmentName));
        setSelectedSubDepartments(prevSelected => prevSelected.filter(subDept => !department.subDepartments.includes(subDept)));
      } else {
        setSelectedDepartments(prevSelected => [...prevSelected, departmentName]);
        setSelectedSubDepartments(prevSelected => [...prevSelected, ...department.subDepartments]);
      }
    }
  };

  const isDepartmentSelected = (departmentName: string) => {
    return selectedDepartments.includes(departmentName) || departments.find(dept => dept.name === departmentName)?.subDepartments.every(subDept => selectedSubDepartments.includes(subDept));
  };

  return (
    <>
      <h2>Component 2</h2>
      <List>
        {departments.map((department) => (
          <div key={department.name}>
            <ListItem button onClick={() => handleDepartmentClick(department.name)}>
              <input
                type="checkbox"
                onChange={() => handleDepartmentChange(department.name)}
                checked={isDepartmentSelected(department.name)}
              />
              {department.name}
              <ListItemIcon>
                {openDepartment === department.name ? <ExpandLess /> : <ExpandMore />}
              </ListItemIcon>
            </ListItem>
            <Collapse in={openDepartment === department.name} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {department.subDepartments.map((subDept) => (
                  <ListItem key={subDept} button>
                    <input
                      type="checkbox"
                      onChange={() => handleSubDepartmentChange(subDept)}
                      checked={selectedSubDepartments.includes(subDept)}
                    />
                    <ListItemText primary={subDept} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </div>
        ))}
      </List>
    </>
  );
}

export default DepartmentList;



//  import { useState } from 'react';  
//  import { Collapse, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
//  import { ExpandLess, ExpandMore } from '@mui/icons-material';

//   interface Department {
//     name: string;
//     subDepartments: string[];
//   }

//   const departments: Department[] = [
//     {
//       name: 'customer_service',
//       subDepartments: ["support",
//       "customer_success"],
//     },
//     {
//       name: 'design',
//       subDepartments: [
//         "graphic_design",
//       	"product_design",
//       	"web_design"

//       ],
//     },

//   ];

//   function DepartmentList() {
//      const [openDepartment, setOpenDepartment] = useState<string | null>(null);
//     const handleDepartmentClick = (departmentName: string) => {
//       if (openDepartment === departmentName) {
//         setOpenDepartment(null);
//       } else {
//         setOpenDepartment(departmentName);
//       }
//     };
//     handlechange=(e
//     return (
//      <>
//      <h2>Component 2</h2>
//       <List>
//         {departments.map((department) => (
//           <div key={department.name}>
//            <ListItem button onClick={() => handleDepartmentClick(department.name)}>
//            <input type="checkbox"onChange={handlechange}/>{department.name}
//               <ListItemIcon>
//             {openDepartment === department.name ? <ExpandLess /> : <ExpandMore />}
//               </ListItemIcon>
//             </ListItem>
//             <Collapse in={openDepartment === department.name} timeout="auto" unmountOnExit>
//               <List component="div" disablePadding>
//                 {department.subDepartments.map((subDept) => (
//                   <ListItem key={subDept} button>
//                     <input type="checkbox"/><ListItemText primary={subDept}  />
                    
//                   </ListItem>
//                 ))}
//               </List>
//             </Collapse>
//           </div>
//         ))}
//       </List>
//       </>
//     );
//   }

//   export default DepartmentList;

