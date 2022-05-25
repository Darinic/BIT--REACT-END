const form = () => {
  return `<div class="form-group mb-2">
    <input type="text" class="form-control term" placeholder="Address">
    </div>
    <div class="form-group mx-sm-3 mb-2">
    <input type="text" class="form-control result" readonly>
    </div>
    <button type="submit" class="btn btn-primary mb-2"> Look for code</button>`;
};

export default form;
