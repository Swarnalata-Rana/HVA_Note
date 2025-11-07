let employees = [
    { name: "Ali", department: "Sales", salary: 25000 },
    { name: "Sara", department: "Marketing", salary: 40000 },
    { name: "John", department: "HR", salary: 55000 }
  ];
  
  function bonusCalculator(employees) {
    employees.forEach(emp => {
      let bonus = 0;
      if (emp.salary < 30000) {
        bonus = emp.salary * 0.2;
      } 
      else if (emp.salary < 50000) {
        bonus = emp.salary * 0.1;
      } 
      else{
          bonus=0
      }
  
      console.log(`${emp.name} - Bonus: ${bonus}`);
    });
  }
  
  bonusCalculator(employees);
  