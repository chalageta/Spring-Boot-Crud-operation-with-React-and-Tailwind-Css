package com.ecc_backend.demo.mapper;

import com.ecc_backend.demo.dto.EmployeeDto;
import com.ecc_backend.demo.entity.Employee;

public class EmployeeMapper {
public static EmployeeDto mapToEmployeeDto(Employee employee){
    return new EmployeeDto(
     employee.getId(),
        employee.getFirstName(),
        employee.getLastName(),
        employee.getEmail()
    );
}
public static Employee mapToEmployee(EmployeeDto employeeDto){
    
    return new Employee(
        employeeDto.getId(),
        employeeDto.getFirstName(),
        employeeDto.getLastName(),
        employeeDto.getEmail()
    );
}

}
