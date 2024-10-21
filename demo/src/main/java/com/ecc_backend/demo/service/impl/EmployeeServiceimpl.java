package com.ecc_backend.demo.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.ecc_backend.demo.dto.EmployeeDto;
import com.ecc_backend.demo.entity.Employee;
import com.ecc_backend.demo.exception.ResourceNotFoundException;
import com.ecc_backend.demo.mapper.EmployeeMapper;
import com.ecc_backend.demo.repository.EmployeeRepository;
import com.ecc_backend.demo.service.EmployeeService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor

public class EmployeeServiceimpl implements EmployeeService {
  
private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
      return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
     Employee employee = employeeRepository.findById(employeeId)
      .orElseThrow(() ->
       new ResourceNotFoundException("Employee is not exist with the given ID: " + employeeId));
      return EmployeeMapper.mapToEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
      
     List<Employee> employees = employeeRepository.findAll();
    
      return employees.stream().map((employee) -> EmployeeMapper.mapToEmployeeDto(employee))
      .collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee) {
     Employee existingEmployee  = employeeRepository.findById(employeeId).orElseThrow(() 
     -> new ResourceNotFoundException("Employee is not found with given id: " +employeeId));
     existingEmployee .setFirstName(updatedEmployee.getFirstName());
     existingEmployee .setLastName(updatedEmployee.getLastName());
     existingEmployee .setEmail(updatedEmployee.getEmail());

     Employee savedEmployee = employeeRepository.save(existingEmployee);

      return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public void deleteEmployee(Long employeeId) {

     Employee employee  = employeeRepository.findById(employeeId).orElseThrow(() 
     -> new ResourceNotFoundException("Employee is not found with given id: " +employeeId));
      employeeRepository.delete(employee);
    }

}
