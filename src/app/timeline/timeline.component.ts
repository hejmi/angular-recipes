import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent implements OnInit {
  form: FormGroup;
  modalRef: BsModalRef;

  events: any[] = [];
  currentEvent: any = { id: null, title: '', description: '' };
  modalCallback: (() => void) | undefined;

  constructor(
    private fb: FormBuilder,
    private modalService: BsModalService,
    private server: ServerService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: [this.currentEvent.title, Validators.required],
      description: this.currentEvent.description,
    });
    this.getEvents();
  }

  private getEvents() {
    this.server.getEvents().then((response: any) => {
      console.log('Response', response);
      this.events = response.map(
        (ev: { body: any; description: any; header: any; title: any }) => {
          ev.body = ev.description;
          ev.header = ev.title;
          return ev;
        }
      );
    });
  }

  onCancel() {
    this.modalRef.hide();
  }
}
