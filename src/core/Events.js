const subscribers = {};

class Events {
  static push(key, ...props) {
    const subs = subscribers[key];

    if (!subs) {
      return;
    }

    subs.listeners.forEach(callback => calback.apply(null, props));
  }

  static getEventEmitter(parentKey) {
    return function(key, ...props) {
      return Events.push(`${parentKey}.${key}`, ...props);
    }
  }

  static subscribe(key, callback) {
    if (!subscribers[key]) {
      subscribers[key] = {
        listeners: []
      }
    }

    subscribers[key].listeners.push(callback);
  }
}

export default Events;
