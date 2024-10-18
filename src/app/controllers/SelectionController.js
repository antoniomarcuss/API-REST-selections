import SelectionRepository from "../repositories/SelectionRepository.js";

class SelectionController {
  // find all
  async index(_, res) {
    const row = await SelectionRepository.findAll();
    res.json(row);
  }

  // find by id
  async show(req, res) {
    const id = req.params.id;
    const row = await SelectionRepository.findById(id);
    res.json(row);
  }

  // create
  async store(req, res) {
    const selection = req.body;
    const row = await SelectionRepository.create(selection);
    res.json(row);
  }

  async update(req, res) {
    const id = req.params.id;
    const selection = req.body;
    const row = await SelectionRepository.update(selection, id);
    res.json(row);
  }

  async delete(req, res) {
    const id = req.params.id;
    const row = await SelectionRepository.delete(id);
    res.json(row);
  }
}

export default new SelectionController();
