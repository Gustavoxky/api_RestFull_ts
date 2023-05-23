import newsRepository from "../repository/newsRepository";

class newsService{
  get() {
    return newsRepository.find({})
  }
  getById(_id) {
    return newsRepository.findById(_id)
  }
  create(news) {
    return newsRepository.create(news)
  }
  update(_id, news) {
    return newsRepository.findByIdAndUpdate(_id, news)
  }
  delete(_id) {
    return newsRepository.findByIdAndRemove(_id)
  }
}

export default new newsService()