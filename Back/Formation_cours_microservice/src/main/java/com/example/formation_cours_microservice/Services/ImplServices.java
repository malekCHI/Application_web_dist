package com.example.formation_cours_microservice.Services;

import java.util.List;

public interface ImplServices  <object>{
    object Create(object T);
    List<object> ReadAll();
    object Update(Long ID ,object T);
    void  Delete(Long ID );
    object ReadOne(Long ID);
}
