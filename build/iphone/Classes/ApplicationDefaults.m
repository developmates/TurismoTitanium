/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"EbuPnoAb0btSkFh0zuTfwrdPEltdH0zG"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"R4PCuhQDAsQgIL9a78Y9VVwHz6PErXFZ"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"7Wri89NsmgHlirW2y62i0PbiCplERjqd"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"k1zu8ROpUHJRtO84v2GmA1BycLtGVboJ"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"zdWjBHTaNRxxOA6eetk1h4Z5SjugBWIT"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"sayQUuZfzzo54hCeHGquAxEym45pQCZQ"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
