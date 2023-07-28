import { AfterViewInit, ViewChild, Component } from '@angular/core';
import { AnnouncementsService } from './announcements.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'announcement23';

  displayedColumns: string[] = ['date', 'author', 'body'];
  allAnnouncments = [
    { author: "James Cook", date: "1-22-2023", body: "Chris Stapleton's new album has been released.", read: true, link: "https://www.savingcountrymusic.com/chris-stapleton-announces-new-album-higher" },
    { author: "Sara Evans", date: "1-25-2023", body: "'Love is in the air' has made its way to the number 1 spot this week.", read: false },
    { author: "Gene Silvers", date: "1-23-2023", body: "Theres a snake in my boot.", read: true, link: "https://en.wikipedia.org/wiki/Woody_(Toy_Story)" },
    { author: "Roger Steves", date: "1-27-2023", body: "You can't surpised a Gemini, they're everywhere!", read: false },
    { author: "Janet Likes", date: "1-20-2023", body: "Clean-up isle 3, its fairly messy. Bring a mop.", read: false },
    { author: "Tom Cook", date: "1-22-2023", body: "Random announcement that says nothing", read: true },
    { author: "Sans", date: "1-25-2023", body: "'Love is in the air' has made its way to the bottom spot this week.", read: false },
    { author: "Lisa Fox", date: "1-23-2023", body: "I shouldve found some dummy data.", read: true },
    { author: "Jessica Rains", date: "1-27-2023", body: "Heres one for you.", read: false },
    { author: "Stuart Metts", date: "1-20-2023", body: "Clean-up isle 7, No, just kidding.", read: false },
    { author: "Candy Luke", date: "1-22-2023", body: "Chris Stapleton's new album has been released, 3 months ago.", read: true },
    { author: "John Johns", date: "1-25-2023", body: "'Love is in the air' has made its way to the number 10 spot this week.", read: false },
    { author: "Gene Silvers Jr", date: "1-23-2023", body: "Where are my boots", read: true },
    { author: "Roger Stoves", date: "1-27-2023", body: "You can't surpised a Leo, they're sketchy!", read: false },
    { author: "Laken Likes", date: "1-20-2023", body: "Clean-up isle 3, its fairly messy. Bring a mop.", read: false },
  ];

  dataSource = new MatTableDataSource<columns>(this.allAnnouncments);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private announcement:AnnouncementsService){
    //  this.allAnnouncments.forEach(function (value){
    //   _snackBar.open(value.body, 'OK', {
    //     duration: 3000
    //   })
    //})
  }

  filter: "read" | "unread" | "all" = "all";


  get announcements() {
    if (this.filter === "all") {
      return this.allAnnouncments;
    }
    return this.allAnnouncments.filter((announcement) =>
      this.filter === "read" ? announcement.read : !announcement.read
    );
  }

}
export interface columns {
  author: string;
  date: string;
  body: string;
  read: boolean;
}

