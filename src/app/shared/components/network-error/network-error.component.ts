import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-network-error',
  templateUrl: './network-error.component.html',
  styleUrls: ['./network-error.component.scss'],
  standalone: true,
})
export class NetworkErrorComponent implements OnInit {
  @Output() retry = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {}

  onRetry() {
    this.retry.emit(true);
  }
}
