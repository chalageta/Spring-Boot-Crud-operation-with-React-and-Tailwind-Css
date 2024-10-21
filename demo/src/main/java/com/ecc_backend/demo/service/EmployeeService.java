package com.ecc_backend.demo.service;

import java.util.List;

import com.ecc_backend.demo.dto.EmployeeDto;

public interface EmployeeService {
    
EmployeeDto createEmployee(EmployeeDto employeeDto);

 EmployeeDto getEmployeeById(Long employeeId);

 List<EmployeeDto> getAllEmployees();

 EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee);
 void deleteEmployee(Long employeeId);
}
