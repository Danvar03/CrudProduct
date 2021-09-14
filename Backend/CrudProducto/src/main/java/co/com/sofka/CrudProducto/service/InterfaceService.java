package co.com.sofka.CrudProducto.service;

import co.com.sofka.CrudProducto.entity.Product;

import java.util.List;

public interface InterfaceService {

    Product save(Product product);
    List<Product> list();
    Product listById(int id);
    void delete(int id);
    Product update(Product product, int id);

}
