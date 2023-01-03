import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-yt-card',
  templateUrl: './yt-card.component.html',
  styleUrls: ['./yt-card.component.scss']
})
export class YtCardComponent {
  @Input() title: string = '';
  @Input() channel: string = '';
  @Input() views: string = '';
  @Input() url: string = '';

}
