const convertToRupiah = require('../helper/convertRupiah');
const { Product, Profile, User, Transaction } = require('../models');
// const session = require('express-session')

class ContProduct {
  static addProduct(request, response) {
    response.render('formAddProduct');
  }

  static handlerAddProduct(request, response) {
    // console.log(request.body)
    let { name, description, price, stock } = request.body;
    Product.create({
      name,
      description,
      price,
      stock,
    })
      .then((result) => {
        response.redirect('/user/product');
      })
      .catch((err) => {
        if (err.name === 'SequelizeValidationError') {
          let errors = err.errors.map((el) => {
            return el.message;
          });
          response.send(errors);
        } else {
          response.send(err);
        }
      });
  }

  static deleteProduct(request, response) {
    let { id } = request.params;
    Product.destroy({
      where: {
        id: id,
      },
    })
    .then((result) => {
      response.redirect('/user/product');
    }).catch((err) => {
      response.send(err);
    });
  }
}

module.exports = ContProduct;
