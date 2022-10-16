class TV {

  public void switchOn() {
    System.out.println("TV is ON");
  }

  public void switchOff() {
    System.out.println("TV is Off");
  }

  public void setVolume(int num) {
    System.out.println("Vol is " + num);
  }

  public void swicthSource(String source) {
    System.out.println("Source is now " + source);
  }
}

class RemoteControl {

  private TV device;
  private int currentVolume;

  RemoteControl(TV device) {
    this.device = device;
    currentVolume = 10;
  }

  public void turnVolUp() {
    this.device.setVolume(this.currentVolume++);
  }

  public void turnVolumeDown() {
    this.device.setVolume(this.currentVolume--);
  }

  public void switchSource() {
    this.device.swicthSource("GAME");
  }
}

public class BridgeDesignPattern {

  public static void main(String args[]) {
    TV tv = new TV();
    RemoteControl rc = new RemoteControl(tv);

    rc.turnVolumeDown();
    rc.turnVolumeDown();
    rc.turnVolumeDown();
    rc.turnVolumeDown();

    rc.turnVolUp();
    rc.turnVolUp();
    rc.turnVolUp();

    rc.switchSource();
  }
}
