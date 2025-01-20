function Card({src, title, short, full}) {
  return (
    <div className="col-md-4 px-2 mb-2">
      <div className="card h-100">
        <img
          src={src}
          className="card-img-top"
          alt={title}
        />
        <div className="card-body">
            <div className="card-header bg-white p-0">
            <h3 className="card-title">{title}</h3>
            <h6>{short}</h6>
            </div>
            
          <p className="card-text mt-2">{full}</p>
        </div>
        <div className="card-footer text-center py-0">
        <a href="#" class="btn btn-primary">Adopt</a>
        </div>
        
      </div>
    </div>
  );
}

export default Card;
