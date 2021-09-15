package co.com.sofka.CrudProducto.controller;

import co.com.sofka.CrudProducto.entity.Product;
import co.com.sofka.CrudProducto.service.InterfaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("api")
public class ProductoController {

    @Autowired
    private InterfaceService service;

    @PostMapping(value="/guardarProducto")
    public Product saveProduct(@Valid @RequestBody Product product){
        return service.save(product);
    }

    @GetMapping(value = "/listarProducto")
    public Iterable<Product> listProducts(){
        return service.list();
    }

    @GetMapping(value = "/listarProducto/{id}")
    public Product listProduct(@PathVariable int id){
        return service.listById(id);
    }

    @DeleteMapping(value = "/borrarProducto/{id}")
    ResponseEntity<Product> deleteProduct(@PathVariable int id){
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping(value = "/actualizarProducto")
    ResponseEntity<Product> updateProduct(@RequestBody Product product){
        return new ResponseEntity<>(service.update(product), HttpStatus.OK );
    }
}
