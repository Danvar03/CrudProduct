package co.com.sofka.CrudProducto.repository;

import co.com.sofka.CrudProducto.entity.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Integer> {
}
