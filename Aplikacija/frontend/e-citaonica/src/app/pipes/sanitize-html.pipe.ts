import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'sanitizeHtml' })
export class SanitizeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }
  transform(value: string | undefined) {
    if (!value) return;
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}
