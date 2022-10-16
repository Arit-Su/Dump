import java.util.ArrayList;
import java.util.List;

interface Observer {
  void onNotification(Video video);
}

class Video {

  public String title;
  public String cat;

  Video(String title) {
    this.title = title;
  }
}

class Subscriber implements Observer {

  private String name;

  Subscriber(String name) {
    this.name = name;
  }

  public String toString() {
    return this.name;
  }

  @Override
  public void onNotification(Video video) {
    System.out.println(name + ": A new video is published " + video.title);
  }
}

class PiyushChannel {

  private List<Subscriber> subscribers;

  PiyushChannel() {
    this.subscribers = new ArrayList<>();
  }

  public void publishVideo(Video video) {
    for (Subscriber sub : subscribers) sub.onNotification(video);
  }

  public void addSubscriber(Subscriber subscriber) {
    this.subscribers.add(subscriber);
  }

  public void removeSubscriber(Subscriber subscriber) {
    this.subscribers.remove(subscriber);
  }

  public List<Subscriber> getSubscribers() {
    return this.subscribers;
  }
}

class SubscriberIterator {

  private PiyushChannel channel;
  private int currentIndex;

  SubscriberIterator(PiyushChannel ch) {
    this.channel = ch;
    this.currentIndex = 0;
  }

  public Subscriber next() {
    Subscriber subscriber = this.channel.getSubscribers().get(currentIndex);
    currentIndex++;
    return subscriber;
  }

  public boolean hasNext() {
    return currentIndex < channel.getSubscribers().size();
  }
}

public class ObserableDesignPattern {

  public static void main(String args[]) {
    PiyushChannel channel = new PiyushChannel();
    SubscriberIterator iterator = new SubscriberIterator(channel);

    channel.publishVideo(new Video("Complete React Series"));

    Subscriber jhon = new Subscriber("Jhon");
    Subscriber jane = new Subscriber("Jane");
    Subscriber bill = new Subscriber("Bill");

    channel.addSubscriber(jhon);
    channel.addSubscriber(bill);
    channel.addSubscriber(jane);

    channel.publishVideo(new Video("Complete java Course"));

    while (iterator.hasNext()) {
      System.out.println(iterator.next());
    }
  }
}
