import { consult } from "../database/connection.js";

class SelectionRepository {
  // CRUD
  findAll() {
    const sql = "SELECT * FROM selections;";
    return consult(sql, "Não foi possível encontrar os dados");
  }

  findById(id) {
    const sql = `SELECT * FROM selections WHERE id=?;`;
    return consult(sql, id, "Não foi possível encontrar os dados");
  }

  create(selection) {
    const sql = "INSERT INTO selections SET ? ";
    return consult(sql, selection, "Não foi possível criar");
  }

  update(selection, id) {
    const sql = "UPDATE selections SET ? WHERE id=?; ";
    return consult(sql, [selection, id], "Não foi possível atualizar");
  }

  delete(id) {
    const sql = "DELETE FROM selections WHERE id=? ";
    return consult(sql, id, "Não foi possível deletar");
  }
}

export default new SelectionRepository();
