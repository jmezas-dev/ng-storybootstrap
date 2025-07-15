import { CommonModule } from '@angular/common';
import {Component, Input, Output, EventEmitter, booleanAttribute} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrls: ['./button.css'],
})

export class ButtonComponent {
  /** Is this the principal call to action on the page? */
  @Input({transform: booleanAttribute})
  primary = false;

  /** What background color to use */
  @Input()
  backgroundColor?: string;

  /** How large should the button be? */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /** Optional click handler */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'btn btn-primary' : 'btn btn-secondary';

    return ['storybook-button', `storybook-button--${this.size}`, mode];
  }
}
