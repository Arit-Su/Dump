class DatabaseService {

  private static DatabaseService obj;

  private DatabaseService() {
    System.out.println("Open a connection with DB");
  }

  public static DatabaseService getInstance() {
    if (obj == null) obj = new DatabaseService();
    return obj;
  }

  public void getDataFromTables() {
    System.out.println("Getting data from db");
  }

  public void putDataInDatabase() {
    System.out.println("Putting data in db");
  }
}

class DatabaseProxyLayer {

  private DatabaseService db;

  DatabaseProxyLayer() {
    this.db = DatabaseService.getInstance();
  }

  void putData(int data) {
    this.db.putDataInDatabase();
  }

  void getData() {
    this.db.getDataFromTables();
  }
}

public class Main {

  public static void main(String args[]) {
    DatabaseProxyLayer dbLayer = new DatabaseProxyLayer();
    dbLayer.putData(1);
  }
}
