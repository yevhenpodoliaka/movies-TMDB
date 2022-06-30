import refs from './refs';

class Storage {
  constructor() {
    this.watchedList = JSON.parse(localStorage.getItem('watchedList')) ?? [];
    this.queuedList = JSON.parse(localStorage.getItem('queuedList')) ?? [];
  }

  addInWatchedList(id) {
    this.watchedList.push(id);
    localStorage.setItem('watchedList', JSON.stringify(this.watchedList));
  }

  addInQueuedList(id) {
    this.queuedList.push(id);
    localStorage.setItem('queuedList', JSON.stringify(this.queuedList));
  }
}

export default Storage;
