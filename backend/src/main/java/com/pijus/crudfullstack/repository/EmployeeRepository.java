package com.pijus.crudfullstack.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.pijus.crudfullstack.model.Employee;

@Repository
public interface EmployeeRepository extends MongoRepository<Employee, String> {

}
