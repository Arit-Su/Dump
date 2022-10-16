abstract class Command {

  private WhiteboardApp app;

  Command(WhiteboardApp app) {
    this.app = app;
  }

  public abstract void execute();
}

class ChangePenColorCommand extends Command {

  private WhiteboardApp app;

  ChangePenColorCommand(WhiteboardApp app) {
    super(app);
    this.app = app;
  }

  @Override
  public void execute() {
    this.app.activeColor = "Blue";
  }
}

class ChangeToolCommand extends Command {

  private WhiteboardApp app;

  ChangeToolCommand(WhiteboardApp app) {
    super(app);
    this.app = app;
  }

  @Override
  public void execute() {
    this.app.activeTool = "Pen";
  }
}

class WhiteboardApp {

  public String activeColor;
  public String activeTool;
  public String textOnScreen;

  public void executeCommand(Command cmd) {
    cmd.execute();
  }
}

public class CommandDesignPattern {

  public static void main(String args[]) {
    WhiteboardApp app = new WhiteboardApp();
    ChangePenColorCommand changePenColorCommand = new ChangePenColorCommand(
      app
    );
    ChangeToolCommand changeToolCommand = new ChangeToolCommand(app);

    System.out.println("Active Color " + app.activeColor);
    System.out.println("Active Tool " + app.activeTool);

    app.executeCommand(changePenColorCommand);
    app.executeCommand(changeToolCommand);

    System.out.println("Active Color " + app.activeColor);
    System.out.println("Active Tool " + app.activeTool);
  }
}
